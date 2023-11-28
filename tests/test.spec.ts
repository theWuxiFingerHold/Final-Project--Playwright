import { test, expect, request } from '@playwright/test';
import { Home } from '../logic/pages/home-page';
import { Category } from '../logic/Enums/CategoryEnum';
import { ClothingOptionForKids } from '../logic/Enums/KidsEnum/SubCategoryForKids';
import { Gender } from '../logic/Enums/KidsEnum/KidsGender';




  async function globaletup() {
    const requestContext = await request.newContext();
    await requestContext.post("https://www.terminalx.com/pg/MutationUserLogin?v=I9dIkXxqUgEmvaClIy6g3%2FMlpMA%3D", {
      data: {
        username: "foadnassar69@gmail.com",
        password: "Fou@d123"
      }
    });
    await requestContext.storageState({
      path: "auth.json"
    });
  }
  
  test.beforeAll(async () => {
    await globaletup();
  });









test('',async ({page}) => {
  await page.goto('https://www.terminalx.com/men');
  const home = new Home(page);
  await home.hoverOverCategory(Category.KIDS)
  await page.pause()
  await home.selectFromSubCategory(Gender.GIRLS, ClothingOptionForKids.SHIRTS)

  // await page.locator(`//a[text() = 'מכנסי ספורט']`).first().click()
  // await page.pause()
})



test('p',async ({page}) => {
  await page.goto('https://www.terminalx.com/men');
  const home = new Home(page);
  await home.hoverOverCategory(Category.MEN)
  await home.subCategorySelector(MenSubCategory.MEN_ACCESSORIES, ClothingOptionForMen.WALLETS)
  await page.pause()
})



test('po',async ({page}) => {
  await page.goto('https://www.terminalx.com/men');
  const home = new Home(page);
  await home.hoverOverCategory(Category.WOMEN)
  await home.subCategorySelector(WomenSubCategory.WOMEN_PANTS, PANTS.JEANS)
  await page.pause()
})

test('colorSelect',async ({page}) => {
  await page.goto('https://www.terminalx.com/men');
  const home = new Home(page);
  await home.hoverOverCategory(Category.WOMEN)
  await home.subCategorySelector(WomenSubCategory.WOMEN_PANTS, PANTS.JEANS)
  const product = new ProductPage(page)
  await product.filterBy(FilterBy.COLOR)
  await product.selectColor(Colors.PINK)
  await page.pause()
})

test('sizeSelect',async ({page}) => {
  await page.goto('https://www.terminalx.com/men');
  const home = new Home(page);
  await home.hoverOverCategory(Category.WOMEN)
  await home.subCategorySelector(WomenSubCategory.WOMEN_PANTS, PANTS.JEANS)
  const product = new ProductPage(page)
  await product.filterBy(FilterBy.SIZE)
  await product.selectSize('XXXL')
  await page.pause()
})






