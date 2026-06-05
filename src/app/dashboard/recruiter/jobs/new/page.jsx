import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import PostJobForm from "./PostJobForm";

const PostJobPage = async () => {
  //   const user = await getUseerSession();
  //   const company = await getRecruiterCompany(user?.id);

  const company = await getLoggedInRecruiterCompany();

  return (
    <div>
      <PostJobForm company={company} />
    </div>
  );
};

export default PostJobPage;
