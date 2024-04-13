pipeline {
    agent any
    tools{
        gradle 'gradle'
        npm 'npm'
    }

    stages {
        stage ('Clone Repository'){
            steps{
                git branch: 'master', url: 'https://github.com/MoSam007/gallery'
            }
        }
        stage('Prepare Environment') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'gradle build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    // Send email notification on test failure
                    emailtext (
                        subject: "Pipeline Failed: ${env.JOB_NAME}",
                        body: "The pipeline ${env.JOB_NAME} has failed. Please check the Jenkins console output for more details.",
                        to: "samato.moma@gmail.com",
                    )
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                echo "render on the node server"
            }
        }
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page
                // sh 'echo "<h1>MILESTONE 2</h1>" >> index.ejs'
                echo "updating landing page for milestone 2"
            }
        }
        stage('Push Changes') {
            steps {
                // sh 'git add .'
                // sh 'git commit -m "Added MILESTONE 2"'
                // sh 'git push origin master'
                echo "commiting changes to github repository"
            }
        }
    }
}
