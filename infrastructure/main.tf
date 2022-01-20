

terraform {
  cloud {
    organization = "thewillygoat-org"
    workspaces {
        name = "personal-website"
    }
  }
}

module "elastic_beanstalk" {
    source = "./../modules/elastic_beanstalk"
    ebs_name = "personal-website"
}
