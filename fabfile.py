from fabric.api import env
from fabric.context_managers import cd
from fabric.operations import run

env.shell = '/bin/bash -l -c'
env.user = 'd'
env.roledefs.update({
    'staging': ['staging.solebtc.com'],
    'production': ['solebtc.com']
})

# Heaven will execute fab -R staging deploy:branch_name=master
def deploy(branch_name):
    deployProduction(branch_name) if env.roles[0] == 'production' else deployStaging(branch_name)

def deployStaging(branch_name):
    printMessage("staging")
    run('rm -rf solebtc-js')
    run('git clone https://github.com/freeusd/solebtc-js.git --branch %s' % (branch_name))
    with cd('solebtc-js'):
        run('npm install')
        run('npm run build-staging')
        run('rm -rf /data/solebtc/web')
        run('mkdir -p /data/solebtc/web')
        run('cp index.html /data/solebtc/web/')
        run('cp -r static /data/solebtc/web/')

def deployProduction(branch_name):
    printMessage("production")

def printMessage(server):
    print("Deploying to %s server at %s as %s" % (server, env.host, env.user))
