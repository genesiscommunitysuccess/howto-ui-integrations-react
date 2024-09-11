pluginManagement {
    pluginManagement {
        val genesisVersion: String by settings

        plugins {
            id("global.genesis.settings") version genesisVersion
        }
    }

    repositories {
        mavenCentral()
        gradlePluginPortal()
        maven {
            val repoUrl = if(extra.properties["useDevRepo"] == "true") {
                "https://genesisglobal.jfrog.io/genesisglobal/dev-repo"
            } else {
                "https://genesisglobal.jfrog.io/genesisglobal/libs-release-client"
            }
            url = uri(repoUrl)
            credentials {
                username = extra.properties["genesisArtifactoryUser"].toString()
                password = extra.properties["genesisArtifactoryPassword"].toString()
            }
        }
        mavenLocal {
            // VERY IMPORTANT!!! EXCLUDE AGRONA AS IT IS A POM DEPENDENCY AND DOES NOT PLAY NICELY WITH MAVEN LOCAL!
            content {
                excludeGroup("org.agrona")
            }
        }
    }
}

plugins {
    id("global.genesis.settings")
}

genesis {
    productName = "OrderMgmt"

    dependencies {
        dependency("global.genesis:reporting:${extra.properties["reportingVersion"]}")
        dependency("global.genesis:file-server:${extra.properties["file-serverVersion"]}")
        dependency("global.genesis:genesis-notify:${extra.properties["genesis-notifyVersion"]}")
        dependency("global.genesis:auth:${extra.properties["authVersion"]}")

    }

    plugins {
        genesisDeploy.enabled = false
    }

}


include("OrderMgmt-app")
