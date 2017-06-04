FROM node:latest
MAINTAINER Cyril Barillet <cyril.barillet@gmail.com>
RUN apt-get update && apt-get install -y \
        git \
    && git clone https://github.com/pencilblue/pencilblue.git /root/mnas \
    && cd /root/mnas \
    && npm install
WORKDIR /root/mnas
EXPOSE 3333
CMD ["node", "app"]
