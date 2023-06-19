import React, { FunctionComponent, PropsWithChildren } from "react";
import { useStore } from "@nanostores/react";
import { allPostsStore } from "./store";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Text,
  Tag,
} from "grommet";
import * as Icons from "grommet-icons";

export interface PostCardProps {
  id: string;
}

export const PostCard: FunctionComponent<PropsWithChildren<PostCardProps>> = ({
  id,
}) => {
  const allPosts = useStore(allPostsStore);
  const foundPost = allPosts.find((p) => p.id === id);

  return (
    <Card height="medium" width="large" background="light-1">
      <CardHeader pad="medium" align="start">
        <Text size="3xl" weight="bold">
          {foundPost ? foundPost.title : "Post not found"}
        </Text>
        {foundPost && (
          <Box direction="row" flex="grow" gap="small">
            <Tag size="small" value="js" />
            <Tag size="small" value="react" />
            <Tag size="small" value="typescript" />
          </Box>
        )}
      </CardHeader>
      {foundPost && (
        <CardBody pad="medium">
          <Text size="medium" weight="normal">
            {foundPost.desc}
          </Text>
        </CardBody>
      )}
      {foundPost && (
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Button icon={<Icons.Favorite color="red" />} hoverIndicator />
          <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      )}
    </Card>
  );
};
