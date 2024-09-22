import threading

class thread_util:
    def __init__(self, thread_max = 20):
        self.__thread_pool__ = list()
        self.__thread_max__ = 1
        if thread_max:
            self.__thread_max__ = thread_max
    
    def process(self, target, args, name):
        th = threading.Thread(target=target, args=args, name= name)
        self.__thread_pool__.append(th)
        th.start()
        self.__update_thread__()
    
    def wait(self):
        self.__update_thread__(1)
    
    def __update_thread__(self, count = None):
        c = self.__thread_max__
        if count:
            c = count
        while len(self.__thread_pool__) >= c:
            dead_pool = []
            for th in self.__thread_pool__:
                if not th.is_alive():
                    dead_pool.append(th)
            for item in dead_pool:
                self.__thread_pool__.remove(item)
            #time.sleep(0.1)
