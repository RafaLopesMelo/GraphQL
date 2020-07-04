# Documentação

<details>
  <summary><strong>Índice</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Post](#post)
    * [User](#user)
  * [Inputs](#inputs)
    * [PostInput](#postinput)
    * [UserInput](#userinput)

</details>

## Query
<table>
  <thead>
    <tr>
      <th align="center">Field</th>
      <th align="center">Argument</th>
      <th align="center">Type</th>
      <th align="center">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>users</strong></td>
      <td align="center"><strong>none</strong></td>
      <td align="center">[<a href="#user">User</a>!]!</td>
      <td align="center">Retorna uma lista de usuários</td>
    </tr>
    <tr>
      <td align="center"><strong>user</strong></td>
      <td align="center"><strong>ID!</strong></td>
      <td align="center"><a href="#user">User</a>!</td>
      <td align="center">Retorna um usuário especificado pelo ID</td>
    </tr>
    <tr>
    <td align="center"><strong>posts</strong></td>
    <td align="center"><strong>none</strong></td>
    <td align="center">[<a href="#post">Post</a>!]!</td>
    <td align="center">Retorna uma lista de postagens</td>
    </tr>
    <tr>
      <td align="center"><strong>post</strong></td>
      <td align="center"><strong>ID!</strong></td>
      <td align="center"><a href="#post">Post</a>!</td>
      <td align="center">Retorna uma postagem especificada pelo ID</td>
    </tr>
  </tbody>
</table>

## Mutation
  <table>
  <thead>
    <tr>
      <th align="center">Field</th>
      <th align="center">Argument</th>
      <th align="center">Type</th>
      <th align="center">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>createUser</strong></td>
      <td align="center"><strong>UserInput!</strong></td>
      <td align="center"><a href="#user">User</a>!</td>
      <td align="center"><strong>Cria um usuário no banco de dados</strong></td>
    </tr>
    <tr>
      <td align="center"><strong>updateUser</strong></td>
      <td align="center"><strong>ID!, UserInput!</strong></td>
      <td align="center"><a href="#user">User</a>!</td>
      <td align="center"><strong>Atualiza informações de um usuário especificado pelo ID no banco de dados</strong></td>
    </tr>
    <tr>
      <td align="center"><strong>deleteUser</strong></td>
      <td align="center"><strong>ID!</strong></td>
      <td align="center"><a href="#boolean">Boolean</a></td>
      <td align="center"><strong>Deleta um usuário especificado pelo ID no banco de dados</strong></td>
    </tr>
        <tr>
      <td align="center"><strong>createPost</strong></td>
      <td align="center"><strong>PostInput!</strong></td>
      <td align="center"><a href="#post">Post</a>!</td>
      <td align="center"><strong>Cria um post no banco de dados</strong></td>
    </tr>
    <tr>
      <td align="center"><strong>updatePost</strong></td>
      <td align="center"><strong>ID!, PostInput!</strong></td>
      <td align="center"><a href="#post">Post</a>!</td>
      <td align="center"><strong>Atualiza informações de um post especificado pelo ID no banco de dados</strong></td>
    </tr>
    <tr>
      <td align="center"><strong>deletePost</strong></td>
      <td align="center"><strong>ID!</strong></td>
      <td align="center"><a href="#boolean">Boolean</a></td>
      <td align="center"><strong>Deleta um post especificado pelo ID no banco de dados</strong></td>
    </tr>
    </tr>
  </tbody>
</table>

## Objects

### Post

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>_id</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>title</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>content</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>author</strong></td>
      <td valign="top"><a href="#user">User</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

### User

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" valign="top"><strong>_id</strong></td>
        <td valign="top"><a href="#id">ID</a>!</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2" valign="top"><strong>firstName</strong></td>
        <td valign="top"><a href="#string">String</a>!</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2" valign="top"><strong>lastName</strong></td>
        <td valign="top"><a href="#string">String</a>!</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2" valign="top"><strong>fullName</strong></td>
        <td valign="top"><a href="#string">String</a>!</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2" valign="top"><strong>email</strong></td>
        <td valign="top"><a href="#string">String</a></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2" valign="top"><strong>active</strong></td>
        <td valign="top"><a href="#boolean">Boolean</a>!</td>
        <td></td>
      </tr>
  </tbody>
</table>

## Inputs

### UserInput

<table>
  <thead>
    <tr>
      <th align="center">Campo</th>
      <th align="center">Tipo</th>
      <th align="center">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>firstName</strong></td>
      <td align="center">String!</td>
      <td align="center">String com valor de do primeiro nome do usuário</td>
    </tr>
    <tr>
      <td align="center"><strong>lastName</strong></td>
      <td align="center">String!</td>
      <td align="center">String com valor de do último nome do usuário</td>
    </tr>
    <tr>
      <td align="center"><strong>email</strong></td>
      <td align="center">String</td>
      <td align="center">String com e-mail do usuário</td>
    </tr>
    <tr>
      <td align="center"><strong>active</strong></td>
      <td align="center">Boolean!</td>
      <td align="center">Boolean indicando se o usuário está ativo</td>
    </tr>
  </tbody>
</table>

### PostInput

<table>
  <thead>
    <tr>
    <th align="center">Campo</th>
    <th align="center">Tipo</th>
    <th align="center">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><strong>title</strong></td>
      <td align="center">String!</td>
      <td align="center">String com o título do post</td>
    </tr>
    <tr>
      <td align="center"><strong>content</strong></td>
      <td align="center">String!</td>
      <td align="center">String com o conteúdo da postagem</td>
    </tr>
    <tr>
      <td align="center"><strong>author</strong></td>
      <td align="center">ID!</td>
      <td align="center">String com o ID do autor do post</td>
    </tr>
  </tbody>
</table>


