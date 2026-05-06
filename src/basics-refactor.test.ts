import { assertType, describe, expect, expectTypeOf, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

/*
Repte 1:
  Llegeix l'article:
  ["Migrating from JavaScript" a la documentació de TypeScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
  i mira si pots trobar com solucionar aquests errors de TypeScript.
*/

describe("Problema de nombres", () => {
  it("Ha de sumar els dos nombres", () => {
    const addTwoNumbers = (a, b) => {
      return a + b;
    };
    expectTypeOf(addTwoNumbers).parameter(0).toEqualTypeOf<number>();
    expectTypeOf(addTwoNumbers).parameter(1).toEqualTypeOf<number>();
  });
});

/*
Repte 2:
  Descobreix com tipar params com un objecte amb una clau first que sigui un nombre i una clau second que també sigui un nombre.
*/

/* describe("Problema de paràmetre objecte", () => {
  it("Ha de sumar els dos nombres", () => {
    const addTwoNumbers = (params) => {
      return params.first + params.second;
    };
    expect(
      addTwoNumbers({
        first: 2,
        second: 4,
      })
    ).toEqual(6);

    expect(
      addTwoNumbers({
        first: 10,
        second: 20,
      })
    ).toEqual(30);
    expectTypeOf(addTwoNumbers).parameter(0).toEqualTypeOf<{ first: number; second: number }>();
  });
}); */

/*
Repte 3:
  Has d'esbrinar com tipar l'objecte perquè 'last' sigui opcional.
*/

/* describe("Problema de propietats opcionals", () => {
  const getName = (params: { first: string; last: string }) => {
    if (params.last !== undefined) {
      return `${params.first} ${params.last}`;
    }
    return params.first;
  };

  it("Ha de funcionar només amb el nom", () => {
    const name = getName({
      first: "Jen",
    });

    expect(name).toEqual("Jen");
  });

  it("Ha de funcionar amb el nom i el cognom", () => {
    const name = getName({
      first: "Jen",
      last: "Simmons",
    });

    expect(name).toEqual("Jen Simmons");
  });
}); */

/*
Repte 4:
  Has d'esbrinar com marcar el paràmetre 'last' com a opcional.
*/

/* describe("Problema de paràmetres opcionals", () => {
  const getName = (first: string, last: string) => {
    if (last !== undefined) {
      return `${first} ${last}`;
    }
    return first;
  };

  it("Ha de funcionar només amb el nom", () => {
    const name = getName("Jen");

    expect(name).toEqual("Jen");
  });

  it("Ha de funcionar amb el nom i el cognom", () => {
    const name = getName("Jen", "Simmons");

    expect(name).toEqual("Jen Simmons");
  });
}); */

/*
Repte 5:
  Consulta la [documentació de TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) i determina com canviar defaultUser perquè el test passi.
*/

/* describe("Problema d'assignació de tipus a variables", () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
  }

  //Com ens assegurem que defaultUser sigui de tipus User
  //EN AQUESTA LÍNIA - no més endavant al codi?
  
  const defaultUser = {};

  const getUserId = (user: User) => {
    return user.id;
  };

  it("Ha d'obtenir l'identificador de l'usuari", () => {
    expect(getUserId(defaultUser)).toEqual(1);
  });
}); */

/*
Repte 6:
  Actualitza la interfície User per restringir la propietat role a una de les opcions establertes.
  El valor I_SHOULD_NOT_BE_ALLOWED hauria de provocar un error, eliminant la línia vermella sota el comentari // @ts-expect-error.
*/

/* describe("Problema d'unions", () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    //Com ens assegurem que role només sigui un dels següents:
    //- 'admin'
    //- 'user'
    //- 'super-admin'
    role: string;
  }

  const defaultUser: User = {
    id: 1,
    firstName: "Jen",
    lastName: "Simmons",
    // @ts-expect-error
    role: "I_SHOULD_NOT_BE_ALLOWED",
  };
}); */

/*
Repte 7:
  Has de solucionar aquest error de tipus esbrinant com representar arrays.
*/

/* describe("Problema d'arrays", () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Post;
  }

  interface Post {
    id: number;
    title: string;
  }

  const defaultUser: User = {
    id: 1,
    firstName: "Jen",
    lastName: "Simmons",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "Com menjo tant de formatge",
      },
      {
        id: 2,
        title: "Per què no menjo més verdures",
      },
    ],
  };
}); */

/*
Repte 8:
  Anota la funció makeUser perquè sempre retorni un User.
*/

/* describe("Problema d'anotacions de tipus de retorn de funció", () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Array<Post>;
  }

  interface Post {
    id: number;
    title: string;
  }

  //Com ens assegurem que makeUser SEMPRE
  //retorni un usuari?
  
  const makeUser = () => {
    return {};
  };

  it("Ha de retornar un usuari vàlid", () => {
    const user = makeUser();

    expect(user.id).toBeTypeOf("number");
    expect(user.firstName).toBeTypeOf("string");
    expect(user.lastName).toBeTypeOf("string");
    expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

    expect(user.posts[0].id).toBeTypeOf("number");
    expect(user.posts[0].title).toBeTypeOf("string");
  });
}); */

/*
Repte 9:
  Has d'esbrinar com actualitzar l'anotació del tipus de retorn perquè TypeScript estigui satisfet.
*/

/* describe("Problema de promeses", () => {
  interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }

  const fetchLukeSkywalker = async (): LukeSkywalker => {
    const data = await fetch("https://swapi.py4e.com/api/people/1").then(
      (res) => {
        return res.json();
      }
    );

    return data;
  };

  it("ha de retornar una promesa", async () => {
    const result = fetchLukeSkywalker();

    expect(result).toBeInstanceOf(Promise);
  });
}); */

/*
Repte 10:
  Actualitza guitarists perquè estigui tipat com un Set de strings.
*/

/* describe("Problema de Set", () => {
  const guitarists = new Set();

  guitarists.add("Jimi Hendrix");
  guitarists.add("Eric Clapton");

  it("Ha de contenir en Jimi i l'Eric", () => {
    expect(guitarists.has("Jimi Hendrix")).toEqual(true);
    expect(guitarists.has("Eric Clapton")).toEqual(true);
  });

  it("Ha de donar un error de tipus si proves d'afegir un valor que no sigui string", () => {
    // @ts-expect-error
    guitarists.add(2);
  });

  it("Ha de ser un Set<string> que es pugui convertir a string[]", () => {
    const guitaristsAsArray = Array.from(guitarists);

    type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
  });
}); */

/*
Repte 11:
  Consulta la documentació de TypeScript i esbrina què pot estar causant aquest problema.
  Actualitza cache perquè estigui tipat correctament i els errors desapareguin. Pista: Consulta com representar objectes amb claus de tipus string i valors tipats.
*/

/* describe("Problema de Record", () => {
  const createCache = () => {
    const cache = {};

    const add = (id: string, value: string) => {
      cache[id] = value;
    };

    const remove = (id: string) => {
      delete cache[id];
    };

    return {
      cache,
      add,
      remove,
    };
  };

  it("Ha d'afegir valors a la memòria cache", () => {
    const cache = createCache();

    cache.add("123", "Jen");

    expect(cache.cache["123"]).toEqual("Jen");
  });

  it("Ha d'eliminar valors de la memòria cache", () => {
    const cache = createCache();

    cache.add("123", "Jen");
    cache.remove("123");

    expect(cache.cache["123"]).toEqual(undefined);
  });
}); */

/*
Repte 12:
  Escriu la funció perquè els tests passin. Pista: utilitza typeof per diferenciar entre nombre i objecte.
*/

/* describe("Problema de filtratge amb typeof", () => {
  const coerceAmount = (amount: number | { amount: number }) => {};

  it("Ha de retornar l'import quan es passa un objecte", () => {
    expect(coerceAmount({ amount: 20 })).toEqual(20);
  });

  it("Ha de retornar l'import quan es passa un nombre", () => {
    expect(coerceAmount(20)).toEqual(20);
  });
});
 */

/*
Repte 13:
  Has de convertir el tipus 'unknown' en un tipus on sàpigues què és.
  Pista: hi ha diverses maneres de resoldre aquest repte, prova diferents opcions!
*/

/* describe("Problema de blocs catch", () => {
  const tryCatchDemo = (state: "fail" | "succeed") => {
    try {
      if (state === "fail") {
        throw new Error("Failure!");
      }
    } catch (e) {
      return e.message;
    }
  };

  it("Ha de retornar el missatge quan falla", () => {
    expect(tryCatchDemo("fail")).toEqual("Failure!");
  });
}); */

/*
Repte 14:
  Aquí, la propietat id es comparteix entre les tres
  interfícies. Pots trobar una manera de refactoritzar això per
  fer-ho més DRY?
  Aquest exercici no genera error inicial.
  L'objectiu és refactoritzar el codi per fer-lo més reutilitzable.
  Pista: pots crear una interfície base i reutilitzar-la amb extends.
*/

/* describe("Problema d'herència amb extends", () => {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
  }

  interface Post {
    id: string;
    title: string;
    body: string;
  }

  interface Comment {
    id: string;
    comment: string;
  }

  type tests = [
    Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
    Expect<Equal<Post, { id: string; title: string; body: string }>>,
    Expect<Equal<Comment, { id: string; comment: string }>>
  ];
}); */

/*
Repte 15:
  Actualitza el tipus de retorn de la funció perquè sigui 'User & { posts: Post[] }'.
*/

/* describe("Problema d'intersecció de tipus", () => {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
  }

  interface Post {
    id: string;
    title: string;
    body: string;
  }

  const getDefaultUserAndPosts = (): unknown => {
    return {
      id: "1",
      firstName: "Jen",
      lastName: "Simmons",
      posts: [
        {
          id: "1",
          title: "Com vaig aprendre a tocar la guitarra",
          body: "Va ser un acord perfecte des del principi",
        },
      ],
    };
  };

  const userAndPosts = getDefaultUserAndPosts();

  console.log(userAndPosts.posts[0]);

  it("Ha de retornar usuari amb posts", () => {
    const userAndPosts = getDefaultUserAndPosts();

    expect(userAndPosts.posts[0].id).toBeTypeOf("string");
  });
}); */

/*
Repte 16:
  Com creem un nou tipus d'objecte amb NOMÉS les propietats firstName i lastName de User?
  Llegeix la documentació de TypeScript sobre Utility Types per veure què pots trobar.
  Pista: revisa els Utility Types Pick i Omit.
*/

/* describe("Problema d'Omit i Pick", () => {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
  }

  //Com creem un nou tipus d'objecte amb NOMÉS les propietats
  //firstName i lastName de User?
  

  type MyType = unknown;

  type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
}); */

/*
Repte 17:
  La funció 'onFocusChange' is actualment 'unknown'. Visita la documentació de TypeScript i esbrina el tipus apropiat per la funció.
*/

/* describe("Problema de tipus de funció", () => {

  const addListener = (onFocusChange: any) => {
    onFocusChange(true);
    onFocusChange(false);
  };

  addListener((isFocused) => {
    console.log({ isFocused });

    type tests = [Expect<Equal<typeof isFocused, boolean>>];
  });
}); */

/*
Repte 18:
  Tipa les funcions perquè els errors desapareguin.
  Consulta la sintaxi de tipatge de funcions i Promise que hem vist anteriorment per ajudar-te.
*/

/* describe("Problema de tipus de funció amb promeses", () => {

    interface User {
        id: string;
        firstName: string;
        lastName: string;
      }
      
      const createThenGetUser = async (
        createUser: unknown,
        getUser: unknown,
      ): Promise<User> => {
        const userId: string = await createUser();
      
        const user = await getUser(userId);
      
        return user;
      };
      

  it("Ha de crear l'usuari i després obtenir-lo", async () => {
    const user = await createThenGetUser(
      async () => "123",
      async (id) => ({
        id,
        firstName: "Jen",
        lastName: "Simmons",
      })
    );

    expect(user).toEqual({
      id: "123",
      firstName: "Jen",
      lastName: "Simmons",
    });
  });
}); */

/*
Repte:
  Llegeix la documentació de TypeScript sobre Utility Types i esbrina com utilitzar ReturnType per extreure el tipus de retorn de myFunc.
  Actualitza el codi perquè el següent test passi:
  type tests = [Expect<Equal<MyFuncReturn, string>>];
  Pista: pots utilitzar typeof per obtenir el tipus d'una variable o funció.
*/
