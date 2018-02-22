import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import NewProspect from "../components/Inputs";
import Card from "../components/Card";
import Container from "../components/Container";

const Inputs = () =>

  <Container>

    <h1>Inputs </h1>

    <div className="row">

      <div className="col s6">

        <Card>
          <NewProspect />
        </Card>

      </div>

    </div>

    <p>
      Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
      porttitor. Sed malesuada molestie velit ac viverra. Quisque a
      ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla
      tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta
      accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum
      egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat
      ligula ultricies. Maecenas vel porta augue. Fusce mauris ex,
      dignissim et lacinia ut, tempus eget nibh.
    </p>
    <p>
      Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
      Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
      elementum tortor. Nullam eget nibh sit amet odio lobortis
      ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
      et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non
      mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu,
      ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum,
      felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras
      arcu lacus, tristique in bibendum vitae, elementum eget lorem.
      Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit
      ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
      libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
      rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
      interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
      mauris quis, laoreet massa.
    </p>

  </Container>

export default Inputs;
