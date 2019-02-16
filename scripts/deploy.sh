#!/bin/bash

SSH_URI="momo@nice.momoperes.ca"
rsync -e "ssh -o StrictHostKeyChecking=no" -r dist/posthop/ $SSH_URI:/etc/posthop/ui/dist/ --delete

