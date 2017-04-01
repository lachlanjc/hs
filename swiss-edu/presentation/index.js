// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  TableItem
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import palx from "palx";
const blue = "#0474f3";
const palette = palx(blue);
const colors = {
  primary: palette.gray[8],

  pink: palette.pink[5],
  red: palette.red[5],
  redLight: palette.red[4],
  green: palette.teal[7],
  cyan: palette.cyan[6],
  blue,

  white: "#ffffff",
  snow: palette.gray[0],
  smoke: palette.gray[2],
  grey: palette.gray[7],
  black: palette.gray[9]
};

const theme = createTheme(colors, {
  primary: "Avenir Next",
  secondary: "Avenir Next"
});

const I = props => <S type="italic" {...props} />;
const Grey = props => <span style={{ color: colors.smoke }} {...props} />;
const Lead = props => (
  <Heading
    style={{ fontWeight: 400 }}
    textColor="black"
    lineHeight={1.25}
    size={3}
    center
    {...props}
  />
);

const Presentation = () => (
  <Deck
    transition={["slide"]}
    transitionDuration={256}
    progress="bar"
    theme={theme}
  >
    <Slide
      transition={["zoom", "slide"]}
      bgImage="https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg"
      maxWidth={768}
      align="center center"
    >
      <Heading size={2} textColor="red">
        L’Éducation Suisse
      </Heading>
      <Text textColor="redLight" size={1} margin="1.5rem 0 0">
        Lachlan Campbell
      </Text>
    </Slide>
    <Slide
      bgImage="http://www.swisspearl.com/uploads/pics/Kindergarten_Blue_Bird_Belgrade_Serbia_0002__DSC1359.jpg"
      bgDarken={0.4}
      maxWidth={768}
      align="center center"
    >
      <Heading size={3} textColor="cyan" fit>Le système éducatif</Heading>
      <List textColor="white">
        <ListItem>Géré par le gouvernement fédéral</ListItem>
        <ListItem>Gratuit, mais 5% aux écoles privées</ListItem>
        <ListItem>Obligatoire (6+)</ListItem>
        <ListItem>11 ans</ListItem>
        <ListItem>#14</ListItem>
      </List>
    </Slide>
    <Slide
      bgImage="http://images.adsttc.com/media/images/5422/0fe2/c07a/8086/fc00/0143/large_jpg/10.jpg?1411518400"
      bgDarken={0.4}
    >
      <Heading size={3} textColor="cyan" textAlign="left">Les niveaux</Heading>
      <List textColor="white" ordered>
        <ListItem>Jardin d'enfants <Grey>= Kindergarten</Grey></ListItem>
        <ListItem>École primaire <Grey>= elementary school</Grey></ListItem>
        <ListItem>Secondaire <Grey>= secondary school</Grey></ListItem>
        <ListItem>Université <Grey>= university</Grey></ListItem>
      </List>
    </Slide>
    <Slide
      bgImage="http://swissemb.org/news/archive/wp-content/uploads/2015/09/emb-sep2015-apprenticeship-main.jpg"
      bgDarken={0.4}
      maxWidth={768}
      align="center center"
    >
      <Lead textColor="white" italic>
        Les apprentissages après l’éducation primaire
      </Lead>
    </Slide>
    <Slide
      bgImage="https://i.ytimg.com/vi/AwIEAV3e8mI/maxresdefault.jpg"
      bgDarken={0.4}
      align="center center"
    >
      <Heading size={3} textColor="cyan" textAlign="left">
        La vie pour les étudiants
      </Heading>
      <List textColor="white">
        <ListItem>Les cours sont similaires en sujet</ListItem>
        <ListItem>Superposé ensemble</ListItem>
        <ListItem>Déjeuner inclus</ListItem>
        <ListItem>La discipline moins stricte que l’américain</ListItem>
        <ListItem>Les sorties frequente</ListItem>
        <ListItem>Les étudiants prennent dans le train</ListItem>
      </List>
    </Slide>
    <Slide
      bgImage="https://i.ytimg.com/vi/APTqGwL7tg0/maxresdefault.jpg"
      bgDarken={0.4}
      align="center center"
    >
      <Heading size={3} textColor="cyan" textAlign="center">Les notes</Heading>
      <Table textColor="white" textAlign="left" margin="2rem 0 0">
        <TableHeader>
          <TableRow>
            <TableHeaderItem>Américain</TableHeaderItem>
            <TableHeaderItem>Suisse</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>A</TableItem>
            <TableItem>6</TableItem>
            <TableItem>Excellent</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>B</TableItem>
            <TableItem>5.5</TableItem>
            <TableItem>Très bien</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>C</TableItem>
            <TableItem>5</TableItem>
            <TableItem>Bien</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>D</TableItem>
            <TableItem>4.5</TableItem>
            <TableItem>Satisfaisant</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>E</TableItem>
            <TableItem>4</TableItem>
            <TableItem>Passable</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
    <Slide
      bgImage="http://www.eatstaylive.com/wp-content/uploads/2015/11/3025546-poster-p-switzerland.jpg"
      bgDarken={0.4}
      align="center center"
    >
      <Heading size={3} textColor="cyan" textAlign="left">
        Le programme
      </Heading>
      <List textColor="white">
        <ListItem>Les salles de classe</ListItem>
        <ListItem>Les vacances: 2-3 semaines</ListItem>
      </List>
    </Slide>
    <Slide
      bgImage="https://upload.wikimedia.org/wikipedia/commons/c/c7/Bundesrat_der_Schweiz_2008_Teil_1.JPG"
      bgDarken={0.4}
      align="center center"
    >
      <Heading size={3} textColor="cyan" textAlign="left">Les langues</Heading>
      <List textColor="white">
        <ListItem>Tout le monde: l’anglais</ListItem>
        <ListItem>le français</ListItem>
        <ListItem>l’allemand</ListItem>
        <ListItem>l’italien</ListItem>
      </List>
    </Slide>
    <Slide transition={["zoom", "slide"]} bgColor="white">
      <Heading textColor="red" size={2} center>Merci!</Heading>
    </Slide>
  </Deck>
);
export default Presentation;
