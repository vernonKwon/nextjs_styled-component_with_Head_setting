# Next js에서 ssr을 위한 styled-components 사용법 Head를 사용하기 위한 셋팅 예제

1. [styled-components 설정법(vercel 공식 레포)](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
2. [styled-components 설정법 설명](https://min33sky.github.io/posts/next-styled-components-ssr/)
3. [Vercel 문서(Font Optimization)](https://nextjs.org/docs/basic-features/font-optimization)

작동은 잘 한다. 하지만 위의 방식대로 하면 \_document.js에서 `<Head/>` 를 사용 못한다. 그렇기 때문에 [다른 설정](https://dev.to/underscorecode/styled-components-101-lecture-3-ssr-with-next-js-custom-icon-fonts-g6o)이 필요하다.

크게 바꿀거 없이 \_document.js만 바꾸면 된다.

```tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

국내의 많은 블로그글들은 `babel-plugin-styled-components`를 설치해서 진행하라고 하는데 이 레포에선 이걸 설치하지 않고 진행했고 아무리 봐도 왜 필요한건지 모르겠다.

아시는분들은 좀 이슈로 알려주세요. ㅠ...

예제로 쓰인 폰트

- https://fonts.google.com/specimen/Nanum+Pen+Script?subset=korean
- https://fonts.google.com/specimen/Festive?preview.text=hello%20world&preview.text_type=custom
