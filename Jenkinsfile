pipeline {
    agent { docker { image 'public.ecr.aws/sam/build-nodejs12.x:latest' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'sam build'
            }
        }
    }
}
