import { baseServerUrl } from "@/utils/constants";
import { Github } from "lucide-react";

const GithubButton = () => {
  const handleGithubLogin = () => {
    window.location.href = baseServerUrl + "/auth/github";
  }

  return (
    <button type="button" onClick={handleGithubLogin} className="bg-[#1E1F22] py-3 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-[#1E1F22]/80 transition-colors">
      Entrar com Github
      <Github />
    </button>
  );
};

export default GithubButton;
