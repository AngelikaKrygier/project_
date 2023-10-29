import React, { useState } from "react";
import format from "date-fns/format";
import {
  List,
  Link,
  ListItem,
  ListItemContent,
  ListItemDescription,
  StyledTile,
  StyledVectorDown,
  StyledVectorUp,
  ItemDate,
  ExeVersion,
} from "./styled";

export const Tile = ({ mainList, changeLog }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <StyledTile>
      {changeLog ? (
        <List changeLog={changeLog}>
          {mainList.map((itemList) =>
            itemList.others.map((item) => (
              <ListItem key={item.id}>
                <>
                  <ItemDate>
                    {format(new Date(item.date), "yyyy-MM-dd")}
                  </ItemDate>
                  <ListItemDescription>{item.description}</ListItemDescription>
                  <ExeVersion>{`[${itemList.pamBuildVersion}]`}</ExeVersion>
                </>
              </ListItem>
            ))
          )}
        </List>
      ) : (
        <List>
          {mainList.map((item, index) => (
            <ListItem key={item.id}>
              <>
                <ListItemDescription>{item.name}</ListItemDescription>
                {openItem === index ? (
                  <>
                    <StyledVectorUp onClick={() => toggleItem(index)} />
                    <Link href={item.link}>Zobacz szczegóły</Link>
                    <ListItemContent>{item.description}</ListItemContent>
                  </>
                ) : (
                  <>
                    <StyledVectorDown onClick={() => toggleItem(index)} />
                    <Link href={item.link}>Zobacz szczegóły</Link>
                  </>
                )}
              </>
            </ListItem>
          ))}
        </List>
      )}
    </StyledTile>
  );
};
