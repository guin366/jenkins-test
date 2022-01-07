pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'sam build'
            }
        }
        stage('deploy') {
          steps {
            withAWS(credentials: 'sam-jenkins-credentials', region: 'us-east-1'){
              sh 'sam deploy --no-confirm-changeset --no-fail-on-empty-changeset'
            }
          }
        }
    }
}
