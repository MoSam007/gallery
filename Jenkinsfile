def COLOR_MAP = [
    'FAILURE' : 'danger'
    'SUCCESS' : 'good'
]

pipeline {
    agent any
    tools{
        nodejs 'node'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/MoSam007/gallery.git'
                    sh "npm install"
                    sh "npm --version"
                }
            }
        }
        
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> ./views/index.ejs'
                
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

        stage('Update Landing Page 2') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 3</h1>" >> ./views/index.ejs'
                
            }
        }

        stage('Update Landing Page 3') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 4</h1>" >> ./views/index.ejs'
                
            }
        }

        stage('Deploy to heroku') {
            steps {
                // withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    // sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/quiet-oasis-85797.git master'
                 echo "Successful deployment"

            }
            post {
                always {
                    echo 'Slack Notification'
                    slackSend(
                        channel: '#sam-ip1',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n 
                           build ${env.BUILD_NUMBER} \n
                           more info at: ${env.BUILD_URL}"
                    )
                }
            }    
        }

    } 
        
}