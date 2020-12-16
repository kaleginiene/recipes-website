import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import RecipeCard from "./RecipeCard";

storiesOf("Card", module).add("Recipe-card", () => (
  <ThemeProvider theme={theme}>
    <RecipeCard
      allRecipes={[
        {
          title: "Cherry Apple Pie",
          image:
            "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/21069-cherry-apple-pie-600x600.jpg?ext=.jpg",
          duration: "00:00:00",
          description:
            "STEP 1\n\nCombine flour and salt in medium bowl. Cut in butter with pastry blender or fork until mixture resembles coarse crumbs. Stir in enough water with fork just until flour is moistened. Divide dough in half and shape each into round disk. Wrap each in plastic food wrap; refrigerate.\n\nSTEP 2\n\nCombine brown sugar, flour, and Chinese five spice powder in large bowl. Add apples and cherries; gently toss until well coated.\n\nSTEP 3\n\nHeat oven to 400°F.\n\nSTEP 4\n\nRoll out one disk of dough on lightly floured surface into 12-inch circle, 1/8-inch thick. Fold into quarters. Place dough into ungreased 9-inch deep dish pie plate. Unfold dough, pressing firmly against bottom and sides. Trim crust to 1/2 inch from edge of plate. Set aside.\n\nSTEP 5\n\nRoll second disk of dough on lightly floured surface to 1/8-inch thickness. Cut 3 (1/4-inch wide) ribbons, 6 (1/2-inch) ribbons and 6 (1-inch wide) ribbons. Braid 1/4-inch wide ribbons.Cut remaining dough into about 30 (1-inch to 2-inch) decorative cut-out shapes.\n\nSTEP 6\n\nPlace apple mixture into crust. Alternating between 1-inch and 2 (1/2-inch) ribbons and the braid lay 6 total ribbons vertically and 7 total ribbons horizontally on pie, weaving strips over and under each other to form lattice. (Refer to recipe image for guidance.) Press strips to adhere to crust edge. Add cut-outs around edge, layering over each other as needed to place all cut-outs. (Brushing backs of cut-outs with a little water helps them stick.)\n\nSTEP 7\n\nCover edge of pie with pie shield or strips of aluminum foil. Bake 35 minutes. Remove pie shield. Brush crust with melted butter; sprinkle with 1 tablespoon sugar. Continue baking 10-20 minutes or until crust is deep golden brown and filling is bubbling. Cool pie at least 30 minutes before serving. ",
          type: "dessert",
          difficulty: "easy",
          ingredients:
            "CRUST\n\n3 cups all-purpose flour\n\n1/2 teaspoon salt\n\n1 cup cold Land O Lakes® Butter, cut into chunks\n\n11 to 13 tablespoons cold water\n\nFILLING\n\n1/2 cup firmly packed brown sugar\n\n1/4 cup all-purpose flour\n\n3/4 teaspoon Chinese five-spice powder\n\n3 medium (3 cups) apples, peeled, cored, sliced 1/4-inch thick\n\n4 cups pitted sweet cherries, thawed, drained if using frozen\n\nTOPPING\n\n1 tablespoon Land O Lakes® Butter, melted\n\n1 tablespoon sugar",
        },
        {
          title: "Cherry Apple Pie",
          image:
            "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/21069-cherry-apple-pie-600x600.jpg?ext=.jpg",
          duration: "00:00:00",
          description:
            "STEP 1\n\nCombine flour and salt in medium bowl. Cut in butter with pastry blender or fork until mixture resembles coarse crumbs. Stir in enough water with fork just until flour is moistened. Divide dough in half and shape each into round disk. Wrap each in plastic food wrap; refrigerate.\n\nSTEP 2\n\nCombine brown sugar, flour, and Chinese five spice powder in large bowl. Add apples and cherries; gently toss until well coated.\n\nSTEP 3\n\nHeat oven to 400°F.\n\nSTEP 4\n\nRoll out one disk of dough on lightly floured surface into 12-inch circle, 1/8-inch thick. Fold into quarters. Place dough into ungreased 9-inch deep dish pie plate. Unfold dough, pressing firmly against bottom and sides. Trim crust to 1/2 inch from edge of plate. Set aside.\n\nSTEP 5\n\nRoll second disk of dough on lightly floured surface to 1/8-inch thickness. Cut 3 (1/4-inch wide) ribbons, 6 (1/2-inch) ribbons and 6 (1-inch wide) ribbons. Braid 1/4-inch wide ribbons.Cut remaining dough into about 30 (1-inch to 2-inch) decorative cut-out shapes.\n\nSTEP 6\n\nPlace apple mixture into crust. Alternating between 1-inch and 2 (1/2-inch) ribbons and the braid lay 6 total ribbons vertically and 7 total ribbons horizontally on pie, weaving strips over and under each other to form lattice. (Refer to recipe image for guidance.) Press strips to adhere to crust edge. Add cut-outs around edge, layering over each other as needed to place all cut-outs. (Brushing backs of cut-outs with a little water helps them stick.)\n\nSTEP 7\n\nCover edge of pie with pie shield or strips of aluminum foil. Bake 35 minutes. Remove pie shield. Brush crust with melted butter; sprinkle with 1 tablespoon sugar. Continue baking 10-20 minutes or until crust is deep golden brown and filling is bubbling. Cool pie at least 30 minutes before serving. ",
          type: "dessert",
          difficulty: "need some effort",
          ingredients:
            "CRUST\n\n3 cups all-purpose flour\n\n1/2 teaspoon salt\n\n1 cup cold Land O Lakes® Butter, cut into chunks\n\n11 to 13 tablespoons cold water\n\nFILLING\n\n1/2 cup firmly packed brown sugar\n\n1/4 cup all-purpose flour\n\n3/4 teaspoon Chinese five-spice powder\n\n3 medium (3 cups) apples, peeled, cored, sliced 1/4-inch thick\n\n4 cups pitted sweet cherries, thawed, drained if using frozen\n\nTOPPING\n\n1 tablespoon Land O Lakes® Butter, melted\n\n1 tablespoon sugar",
        },
        {
          title: "Cherry Apple Pie",
          image:
            "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/21069-cherry-apple-pie-600x600.jpg?ext=.jpg",
          duration: "00:00:00",
          description:
            "STEP 1\n\nCombine flour and salt in medium bowl. Cut in butter with pastry blender or fork until mixture resembles coarse crumbs. Stir in enough water with fork just until flour is moistened. Divide dough in half and shape each into round disk. Wrap each in plastic food wrap; refrigerate.\n\nSTEP 2\n\nCombine brown sugar, flour, and Chinese five spice powder in large bowl. Add apples and cherries; gently toss until well coated.\n\nSTEP 3\n\nHeat oven to 400°F.\n\nSTEP 4\n\nRoll out one disk of dough on lightly floured surface into 12-inch circle, 1/8-inch thick. Fold into quarters. Place dough into ungreased 9-inch deep dish pie plate. Unfold dough, pressing firmly against bottom and sides. Trim crust to 1/2 inch from edge of plate. Set aside.\n\nSTEP 5\n\nRoll second disk of dough on lightly floured surface to 1/8-inch thickness. Cut 3 (1/4-inch wide) ribbons, 6 (1/2-inch) ribbons and 6 (1-inch wide) ribbons. Braid 1/4-inch wide ribbons.Cut remaining dough into about 30 (1-inch to 2-inch) decorative cut-out shapes.\n\nSTEP 6\n\nPlace apple mixture into crust. Alternating between 1-inch and 2 (1/2-inch) ribbons and the braid lay 6 total ribbons vertically and 7 total ribbons horizontally on pie, weaving strips over and under each other to form lattice. (Refer to recipe image for guidance.) Press strips to adhere to crust edge. Add cut-outs around edge, layering over each other as needed to place all cut-outs. (Brushing backs of cut-outs with a little water helps them stick.)\n\nSTEP 7\n\nCover edge of pie with pie shield or strips of aluminum foil. Bake 35 minutes. Remove pie shield. Brush crust with melted butter; sprinkle with 1 tablespoon sugar. Continue baking 10-20 minutes or until crust is deep golden brown and filling is bubbling. Cool pie at least 30 minutes before serving. ",
          type: "dessert",
          difficulty: "expert",
          ingredients:
            "CRUST\n\n3 cups all-purpose flour\n\n1/2 teaspoon salt\n\n1 cup cold Land O Lakes® Butter, cut into chunks\n\n11 to 13 tablespoons cold water\n\nFILLING\n\n1/2 cup firmly packed brown sugar\n\n1/4 cup all-purpose flour\n\n3/4 teaspoon Chinese five-spice powder\n\n3 medium (3 cups) apples, peeled, cored, sliced 1/4-inch thick\n\n4 cups pitted sweet cherries, thawed, drained if using frozen\n\nTOPPING\n\n1 tablespoon Land O Lakes® Butter, melted\n\n1 tablespoon sugar",
        },
      ]}
    />
  </ThemeProvider>
));
