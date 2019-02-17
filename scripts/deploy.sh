#!/bin/bash

SSH_URI="momo@static.posthop.momoperes.ca"
rsync -e "ssh -o StrictHostKeyChecking=no" --rsync-path="sudo rsync" -r www/ $SSH_URI:/var/www/html --delete

