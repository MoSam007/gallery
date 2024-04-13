pipeline {
    agent any
    tools{
        gradle 'gradle'
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
                    try {
                        sh 'npm --version'
                    } catch (Exception e) {
                        // Handle the error if npm is not installed
                        echo "NPM is not installed, installing..."
                        sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                        sh 'sudo apt-get install -y nodejs'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sh 'gradle build'
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
