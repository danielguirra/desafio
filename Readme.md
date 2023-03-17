# Api do Desafio

## Documentação da API

#### Retorna todos os Produtos Paginados

```http
  GET /api/product/findAll?page=1&productsPerPage=1
```

| Query             | Tipo     | Descrição                                                                   |
| :---------------- | :------- | :-------------------------------------------------------------------------- |
| `page`            | `string` | **Opcional**. A pagina que você quer, por padrão "1"                        |
| `productsPerPage` | `string` | **Opcional**. O numero de produtos por pagina que você quer, por padrão "1" |

#### Retorna um ou mais produto baseado no nome do mesmo

```http
  GET /api/product/name?name=NomeDoProduto&page=1&productsPerPage=1
```

| Query               | Tipo     | Descrição                                                                   |
| :------------------ | :------- | :-------------------------------------------------------------------------- |
| `nomeDoFuncionario` | `string` | **Obrigatório**. O nomeDoFuncionario do funcionário que você quer           |
| `page`              | `string` | **Opcional**. A pagina que você quer, por padrão "1"                        |
| `productsPerPage`   | `string` | **Opcional**. O numero de produtos por pagina que você quer, por padrão "1" |

#### Retorna um ou mais produto baseado na diferença de datas de criação

```http
  GET /api/product/beetween?startDate=dataEmTimeStamp&endDate=dataEmTimeStamp&page=1&productsPerPage=3
```

###### Os tipos de data deve seguir estes padrões **2019-02-21T00:38:02.000Z** ou **2018-03-21 01:15:34**

| Query             | Tipo     | Descrição                                                                   |
| :---------------- | :------- | :-------------------------------------------------------------------------- |
| `startDate`       | `string` | **Obrigatório**. Data de inico de criação que você quer                     |
| `endDate`         | `string` | **Opcional**. Data final de criação que você quer, por padrão data de hoje  |
| `page`            | `string` | **Opcional**. A pagina que você quer, por padrão "1"                        |
| `productsPerPage` | `string` | **Opcional**. O numero de produtos por pagina que você quer, por padrão "1" |

#### Retorna um mais produto baseado no Product_ID do mesmo

```http
  GET /api/product/id/:id
```

| Parâmetro | Tipo     | Descrição                                              |
| :-------- | :------- | :----------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O Product_ID do produto que você quer |

#### Adicionar um novo Produto ou Produtos

```http
  POST /api/product/xml
  </Products>
    <Product>
      <Product_ID>6489</Product_ID>
      <SKU>DKO-PROF</SKU>
      <Name>Knock Your Socks Off Lace-Up Heels</Name>
      <Product_URL>https://www.domain.com/product/dko-prof</Product_URL>
      <Price>38</Price>
      <Retail_Price>60</Retail_Price>
      <Thumbnail_URL>https://www.domain.com/images/dko-prof_600x600.png</Thumbnail_URL>
      <Search_Keywords>lorem, ipsum, dolor, ...</Search_Keywords>
      <Description>Sociosqu facilisis duis ...</Description>
      <Category>Shoes&gt;Heels&gt;Lace-Up Heels|Featured Products|Shoes On Sale</Category>
      <Category_ID>310|719|605</Category_ID>
      <Brand>Spark Collective</Brand>
      <Child_SKU>DKO-PROF-BLK-5|DKO-PROF-BLK-5.5|DKO-PROF-BLK-6|DKO-PROF-BLK-7|DKO-PROF-BLK-7.5</Child_SKU>
      <Child_Price></Child_Price>
      <Color>Black</Color>
      <Color_Family>Black</Color_Family>
      <Color_Swatches></Color_Swatches>
      <Size></Size>
      <Shoe_Size>5|5.5|6|7|7.5</Shoe_Size>
      <Pants_Size></Pants_Size>
      <Occassion></Occassion>
      <Season></Season>
      <Badges>Featured</Badges>
      <Rating_Avg>4.9</Rating_Avg>
      <Rating_Count>4</Rating_Count>
      <Inventory_Count>19</Inventory_Count>
      <Date_Created>2018-02-28 23:37:28</Date_Created>
    </Product>
  </Products>
```

##### Todos elementos que devem estar presentes no corpo

| Corpo do XML      | Tipo     | Descrição                                                 |
| :---------------- | :------- | :-------------------------------------------------------- |
| `Product_ID`      | `string` | **Obrigatório**. O Product_ID do produto                  |
| `SKU`             | `string` | **Obrigatório**. O SKU do produto                         |
| `Name`            | `string` | **Obrigatório**. O nome do produto                        |
| `Product_URL`     | `string` | **Obrigatório**. A URL do produto                         |
| `Price`           | `string` | **Obrigatório**. O preço do produto                       |
| `Retail_Price`    | `string` | **Obrigatório**. O preço de varejo do produto             |
| `Thumbnail_URL`   | `string` | **Obrigatório**. A URL da Imagem do produto               |
| `Search_Keywords` | `string` | **Obrigatório**. A palavras de procura do produto         |
| `Description`     | `string` | **Obrigatório**. A descrição do produto                   |
| `Category`        | `string` | **Obrigatório**. As ou A Categoria do produto             |
| `Category_ID`     | `string` | **Obrigatório**. IDS das Categorias                       |
| `Brand`           | `string` | **Obrigatório**. A Marca do produto                       |
| `Child_SKU`       | `string` | **Opcional**. SKU dos produtos filhos                     |
| `Child_Price`     | `string` | **Opcional**. preço dos produtos filhos                   |
| `Color`           | `string` | **Obrigatório**. A cor do produto                         |
| `Color_Family`    | `string` | **Obrigatório**. A familia da cor do produto              |
| `Color_Swatches`  | `string` | **Opcional**. A mostra de cor do produto                  |
| `Size`            | `string` | **Opcional**. Tamanho do produto                          |
| `Shoe_Size`       | `string` | **Opcional**. Tamanho de sapato do produto                |
| `Pants_Size`      | `string` | **Opcional**. Tamanho das calças do produto               |
| `Occassion`       | `string` | **Opcional**. Ocasião que produto se encontra             |
| `Season`          | `string` | **Opcional**. Sessão que produto se econtra               |
| `Badges`          | `string` | **Opcional**. Distintivos do produto                      |
| `Rating_Avg`      | `string` | **Obrigatório**. Avaliação média do produto               |
| `Rating_Count`    | `string` | **Obrigatório**. Total de avaliações do produto           |
| `Inventory_Count` | `string` | **Obrigatório**. Numero de produtos em estoque            |
| `Date_Created`    | `string` | **Obrigatório**. Data de criação do produto ou publicação |

#### Exportar os Produtos em XML

```http
  GET /api/product/export
```
