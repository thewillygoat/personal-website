
resource "aws_elastic_beanstalk_application" "personal-website" {
  name        = var.ebs_name
  description = "my personal website host"

}

resource "aws_elastic_beanstalk_environment" "personal-website-env" {
  name                = "${var.ebs_name}-env"
  application         = aws_elastic_beanstalk_application.personal-website.name
  solution_stack_name = "64bit Amazon Linux 2 v5.4.9 running Node.js 14"

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }
}
