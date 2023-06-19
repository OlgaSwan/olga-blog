import React, { FunctionComponent } from "react";

import { PageHeader } from "grommet";
import { Template } from "../components/template";
import { PostList } from "../model/post/PostList";

export const Home: FunctionComponent = () => (
  <Template>
    <PageHeader size="small" title="Home" margin={{ bottom: "large" }} />
    <PostList />
  </Template>
);
