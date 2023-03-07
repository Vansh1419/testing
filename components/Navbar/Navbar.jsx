import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() =>
          router.push({
            pathname: "/",
          })
        }
      >
        logo
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          router.push({
            pathname: "/projects",
          })
        }
      >
        Projects
      </Button>
    </div>
  );
};

export default Navbar;
