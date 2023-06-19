import React, { FunctionComponent } from "react";
import { useStore } from "@nanostores/react";
import { Box } from "grommet";

import { allPostsStore } from "./store";
import { PostCard } from "./PostCard";

export const PostList: FunctionComponent = () => {
  const allPosts = useStore(allPostsStore);

  return (
    <Box gap="medium">
      {allPosts.map((p) => (
        <PostCard key={p.id} id={p.id} />
      ))}
    </Box>
  );
};
