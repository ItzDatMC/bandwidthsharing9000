#!/usr/bin/env bash
# LICENSE_CODE ZON ISC

welcome_text(){
    echo "Installing EarnApp CLI"
    echo "Welcome to EarnApp for Linux and Raspberry Pi."
    echo "EarnApp makes you money by sharing your spare bandwidth."
    echo "You will need your EarnApp account username/password."
    echo "Visit earnapp.com to sign up if you don't have an account yet"
    echo
    echo "To use EarnApp, allow BrightData to occasionally access websites \
through your device. BrightData will only access public Internet web \
pages, not slow down your device or Internet and never access personal \
information, except IP address - see privacy policy and full terms of \
service on earnapp.com."
}

ask_consent(){
    read -p "Do you agree to EarnApp's terms? (Write 'yes' to continue): " \
        consent
}

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root"
   exit 1
fi
welcome_text
if [[ $0 == '-y' ]] || [[ $1 == '-y' ]]; then
    consent='yes'
fi
while [[ ${consent,,} != 'yes' ]] && [[ ${consent,,} != 'no' ]]; do
    ask_consent
done
if [ ${consent,,} == 'yes' ]; then
    echo "Installing..."
elif [ ${consent,,} == 'no' ]; then
    echo "Sorry, you must accept these terms to use EarnApp."
    echo "If you decided not to use EarnApp, enter 'No'"
    exit 1
fi
if [ ! -d "/etc/earnapp" ]; then
    echo "Creating directory /etc/earnapp"
    mkdir /etc/earnapp
    chmod a+wr /etc/earnapp/
    touch /etc/earnapp/status
    chmod a+wr /etc/earnapp/status
else
    echo "System directory already exists"
fi
archs=`uname -m`
if [ $archs = "x86_64" ]; then
    file=bin_64
else
    file=armv7
fi
echo "Fetching $file"
wget -c https://brightdata.com/static/earnapp/$file -O /tmp/earnapp
echo | md5sum /tmp/earnapp
chmod +x /tmp/earnapp
echo "running /tmp/earnapp install"
/tmp/earnapp install

