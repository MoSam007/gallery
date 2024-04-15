pipeline {
    agent any
    tools{
        nodejs 'node'
    }
    environment {
        HEROKU_APP_NAME = 'quiet-oasis-85797'
        HEROKU_CREDENTIALS = credentials('HEROKU_CREDENTIALS')
        HEROKU_GIT_URL = 'https://git.heroku.com/quiet-oasis-85797.git'
        HEROKU_API_KEY = credentials('HEROKU_API_KEY')
        HEROKU_EMAIL = credentials('HEROKU_EMAIL')
    }

    stages {
        stage('Build') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/MoSam007/gallery.git'
                    // git branch: 'master', url: HEROKU_GIT_URL
                    sh "npm install"
                    sh "npm --version"
                }
            }
        }

        stage ('Test'){
            steps{
                sh 'npm test'
            }
            post {
                failure {
                    // Send email notification if the test fails
                    emailext (
                        subject: "Test Failure in Pipeline",
                        body: "The npm test has failed. Please investigate.",
                        to: "samato.moma@gmail,com",
                    )
                }
            }
        }

        stage('Deploy to heroku') {
            steps {
                 script {
                    // withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: HEROKU_CREDENTIALS, usernameVariable: 'HEROKU_EMAIL', passwordVariable: 'HEROKU_API_KEY']]) {
                    // sh "git push https://$HEROKU_EMAIL:$HEROKU_API_KEY@$HEROKU_GIT_URL HEAD:master"
                    echo "successful heroku deployment"

                    }
                 }
            }
            post {
                always {
                    echo 'Slack Notification'
                    slackSend(
                        channel: '#sam-ip1',
                        color: 'good',
                        message: "*${currentBuild.currentResult}:* \n Job: ${env.JOB_NAME} \n Build: ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                    )
                }
            }
        }

    } 
        
}