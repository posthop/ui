#!/bin/bash

SSH_URI="momo@static.posthop.momoperes.ca"
rsync -e "ssh -o StrictHostKeyChecking=no" --rsync-path="sudo rsync" platforms/android/app/build/outputs/apk/debug/app-debug.apk $SSH_URI:/var/www/html/download.apk

