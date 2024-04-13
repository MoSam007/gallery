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
                sh 'echo "<h1>MILESTONE 2</h1>" >> views/index.ejs'
                
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
                sh 'echo "<h1>MILESTONE 3</h1>" >> index.ejs'
                
            }
        }

        stage('Deploy') {
            steps {
                // sh 'node server'
                echo "Successful deploy"
            }
        } 

        stage('Update Landing Page 3') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 4</h1>" >> index.ejs'
                
            }
        }

        stage('Slack Notification'){
            steps{
                slackSend baseUrl: 'https://hooks.slack.com/services/', 
                channel: 'sam-ip1', 
                color: 'good', 
                message: 'Welcome to IP1!', 
                tokenCredentialId: 'Ip1-demo', 
                username: 'samip1'
            }
        }
    } 
        
}