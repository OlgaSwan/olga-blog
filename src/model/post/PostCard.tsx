import React, { FunctionComponent, PropsWithChildren } from "react";
import { useStore } from "@nanostores/react";
import { allPostsStore, devTerms } from "./store";
import { random, sampleSize } from 'lodash-es'
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
  const randomTags = sampleSize(devTerms, random(2, 3))

  return (
    <Card height="medium" width="large" background="light-1">
      <CardHeader pad="medium" align="start">
        <Text size="3xl" weight="bold">
          {foundPost ? foundPost.title : "Post not found"}
        </Text>
        {foundPost && (
          <Box direction="row" flex="grow" gap="small">
            {randomTags.map(tag => (
              <Tag size="small" value={tag} />
            ))}
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
