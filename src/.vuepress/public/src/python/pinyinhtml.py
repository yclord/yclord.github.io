import os
import sys
sys.path.append(r'F:\01.workspace\29.OpenVoice\OpenVoice')
import os
import torch
import se_extractor
from datetime import datetime
from api import BaseSpeakerTTS, ToneColorConverter
from pypinyin import pinyin, lazy_pinyin, Style
from functools import reduce
import random as rd
import pyttsx3
import threading

# Judge whether the word is chinese character
def isChinese(words):
    rc = True
    for word in words:
        if not '，。？！：；、）（“”…《 》【】——·'.__contains__(word):
            rc &= ('\u0e00'<=word<='\u9fa5')
        else:
            rc = False
        if not rc:
            break
    return rc

class ChineseAudio:
    _instance_lock = threading.Lock()
    def __init__(self):
        if hasattr(self, 'tile_dbs'):
            return
        self.__init_audio_pkg__()
    #Single Class
    def __new__(cls, *args, **kwargs):
        if not hasattr(eval(cls.__name__), "_instance"):
            with eval(cls.__name__)._instance_lock:
                if not hasattr(eval(cls.__name__), "_instance"):
                    eval(cls.__name__)._instance = object.__new__(cls)
        return eval(cls.__name__)._instance
    
    def __init_audio_pkg__(self):
        self.__init_openvoice__()
        self.__init_tts__()
    
    def __init_openvoice__(self):
        device = 'cuda:0'
        base = r'F:\01.workspace\29.OpenVoice\OpenVoice'
        ckpt_base = os.path.join(base, 'checkpoints/base_speakers/ZH')
        self.base_speaker_tts = BaseSpeakerTTS(f'{ckpt_base}/config.json', device=device)
        self.base_speaker_tts.load_ckpt(f'{ckpt_base}/checkpoint.pth')
    
    def __init_tts__(self):
        self.tts_engine = pyttsx3.init()
        
    def save_audio(self, words, filepath):
        #print(words, filepath)
        #self.tts_engine.save_to_file(words, filepath)
        #self.tts_engine.runAndWait()
        if len(words) > 5:
            self.base_speaker_tts.tts(words, filepath, speaker='default', language='Chinese', speed=1.0)
        else:
            self.tts_engine.save_to_file(words, filepath)
            self.tts_engine.runAndWait()
        

class PinyinAudio:
    def __init__(self, 
            base_path = r'F:\01.workspace\27.blog\blog-son\yclord.github.io\src\.vuepress\public',
            sentence_save_path = None,
            word_save_path = '/data/chinese/audio'
        ):
        self.__word_audio_path__ = word_save_path
        self.__sentence_audio_path__ = sentence_save_path
        self.__base_path__ = base_path
        self.__init_audio_pkg__()
    
    def __init_audio_pkg__(self):
        self.__audio__ = ChineseAudio()

    def getRelativePath(self, word):
        return f"/{self.__word_audio_path__}/{word}.wav".replace('//','/')

    def generate_audio_for_single_word(self, word, base_path):
        relative_path = self.getRelativePath(word)
        fullpath = os.path.abspath(f"{base_path}/{relative_path}")
        if not os.path.exists(fullpath):
            self.__audio__.save_audio(word, fullpath)
        return fullpath, relative_path
    
    def generate_audio_for_sentence(self, words, base_path, sentence_path):
        fullpath, relative_path = self.get_sentence_file_path(base_path, sentence_path)
        if not os.path.exists(fullpath):
            self.__audio__.save_audio(words, fullpath)
        return fullpath, relative_path
    
    def sentence_add_pinyin_audio(self, words, base_path):
        ret = ""
        offset = 0
        pinyins = pinyin(words)
        pinyinc = 0
        nonPinyinContinue = True
        for i in range(len(words)):
            if isChinese(words[i]):
                self.generate_audio_for_single_word(words[i], base_path)
                tid = f"{datetime.now().timestamp()}-{rd.randint(1, 1000)}"
                f""
                nonPinyinContinue = False
                tmp = f"<ruby>{words[i]}<rt>{pinyins[i-offset + pinyinc][0]}</rt></ruby>"
                ret = f"""{ret}<span id="{tid}" style="background-color:rgba(0,0,0,0);" onclick="play_audio('{tid}', '{self.getRelativePath(words[i])}')">{tmp}</span>"""
            else:
                offset += 1
                ret += words[i]
                if not nonPinyinContinue:
                   pinyinc += 1 
                nonPinyinContinue = True
        return ret
    
    def get_sentence_file_path(self, base_path, sentence_path):
        rc = None
        i = 0
        while True:
            i += 1
            temp = f'/{sentence_path}/{i:03d}.wav'.replace('\\', '/').replace('//', '/')
            fullpath = os.path.abspath(f'{base_path}/{temp}')
            if not os.path.exists(fullpath):
                rc = (fullpath, temp)
                break
        return rc
    
    def article_add_pinyin_audio(self, article):
        rc = ""
        i = 0
        paras = filter(lambda x: len(x.strip()) > 0, article.split('\n'))
        for p in paras:
            sentences = filter(lambda x: len(x.strip()) > 0, p.split('。'))
            pw = ''
            for s in sentences:
                i += 1
                ret = self.sentence_add_pinyin_audio(s, self.__base_path__)
                if self.__sentence_audio_path__:
                    fullpath, relative_path = self.generate_audio_for_sentence(s, self.__base_path__, self.__sentence_audio_path__)
                    ret = f"""{ret}。<i id="{i}" class="fa-solid fa-volume-high" onclick="play_audio('{i}', '{relative_path}')"></i>"""
                    pw = f"{pw}{ret}" if len(pw) > 0 else f"{ret}"
                    
            rc = f'{rc}\n\n{pw}'
        return rc
    
base_path = r'F:\01.workspace\27.blog\blog-son\yclord.github.io\src\.vuepress\public'
sentence_path = '/data/chinese/stories/powfulrooster'
word_path = '/data/chinese/audio'


#base_path = r'F:\01.workspace\27.blog\blog-son\resources'
#sentence_path = '/audio'
#word_path = '/audio'

obj = PinyinAudio(
    base_path = base_path,
    sentence_save_path = sentence_path,
    word_save_path = word_path
)

#print(obj.article_add_pinyin_audio("孤注一掷"))

if len(sys.argv) > 1:
    if os.path.exists(sys.argv[1]):
        ret = None
        with open(sys.argv[1], 'r', encoding='utf-8') as fr:
            ret = fr.read()
        if ret:
            with open(sys.argv[1] + ".html", 'w', encoding='utf-8') as fw:
                fw.write(obj.article_add_pinyin_audio(ret))
        else:
            print(sys.argv[1], "内容为空")
    else:
        print(sys.argv[1], "不存在")
