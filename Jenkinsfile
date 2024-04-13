pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    // Check if npm is installed
                    def npmInstalled = sh(script: 'npm --version', returnStatus: true) == 0
                    if (!npmInstalled) {
                        error 'npm not found, cannot continue'
                    }
                }
            }
        }
        
        stage('Install npm') {
            steps {
                // Install npm
                sh 'npm install'
            }
        }
        }
        
        stage('Build') {
            steps {
                sh 'gradle init'
                sh 'gradle build'
            }
        }
        
        stage('Deploy to Render') {
            steps {
                sh 'node server'
            }
        }
        
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> index.ejs'
                echo "updating landing page for milestone 2"
            }
        }
        
    }
}