import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType='scoops' />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  render(<Options optionType='toppings' />);

  const images = await screen.findAllByRole("img", { name: /toppings$/i });
  expect(images).toHaveLength(3);

  const altText = images.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping  ",
  ]);
});
