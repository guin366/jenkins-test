pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'sam build --build-dir ./.aws-sam/build'
            }
        }
    }
}
