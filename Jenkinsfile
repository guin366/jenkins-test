pipeline {
    agent { docker { image 'public.ecr.aws/sam/build-nodejs12.x:latest' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'mkdir ./.aws-sam'
                sh 'mkdir ./.aws-sam/build'
                sh 'sam build --build-dir ./.aws-sam/build'
            }
        }
    }
}
