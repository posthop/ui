#!/bin/bash

SSH_URI="momo@nice.momoperes.ca"
rsync -r dist/posthop/ $SSH_URI:/etc/posthop/ui/dist/ --delete

