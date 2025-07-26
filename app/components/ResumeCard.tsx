import { Link } from "react-router";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return <Link to={`resume/${resume.id}`}>{resume.jobTitle}</Link>;
};

export default ResumeCard;
