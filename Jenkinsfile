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
                // sh 'node server'
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/quiet-oasis-85797.git master'
                    
                }    
            }
        } 

        stage('Slack Notification'){
            steps{
                slackSend baseUrl: 'https://hooks.slack.com/services/', 
                channel: 'sam-ip1', 
                color: 'good', 
                message: 'Gallery app successful deploy. started ${env.JOB_NAME} ${env.BUILD_NUMBER} (${env.BUILD_URL}|Open)', 
                tokenCredentialId: 'Ip1-demo', 
                username: 'sam-ip1'
            }
        }
    } 
        
}