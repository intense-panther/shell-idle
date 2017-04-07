## A sad attempt at invoking 'oc idle' via shell.exec

Currently requires `edit` rights for the `default` service account

    $ oc policy add-role-to-user -z default edit

The name `ocapp` is hard-coded, so once in this directory, do the
following:

    $ oc new-app . --strategy=docker --name=ocapp
    $ oc start-build ocapp --from-dir=$PWD --follow

Once the app is running, curl the `/idle` path to idle the app, e.g.

    $ curl http://ocapp-myproject.192.168.42.162.xip.io/idle
