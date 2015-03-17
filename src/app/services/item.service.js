(function(){
  'use strict';

  angular
    .module( 'app.services.item', [] )
    .factory( 'ItemService', ItemService );

  ItemService.$inject = [ '$q' ];
  /* @ngInject */
  function ItemService( $q ){
    return {
      getItem: getItem,
      getItems: getItems

    };

    //////////////////////////////
    // Implementation details
    //////////////////////////////
    function getItems(){
      var items = [
        {
          id: 1,
          name: "The Lord of the Rings Balrog Demon of Shadow and Flame Statue",
          linkId: "the+lord+of+the+rings+balrog+demon+of+shadow+and+flame+statue",
          description: "This Lord of the Rings polystone statue from Weta depicts Balrog of Morgoth, wielding a flaming sword.",
          price: 648.95,
          image: "lotrwtstat02.jpg",
          thumbnail: "thumbnail_lotrwtstat02.jpg"
        },
        {
          id: 2,
          name: "The Lord of the Rings Ringwraith Statue",
          linkId: "the+lord+of+the+rings+ringwraith+statue",
          description: "This intricately sculpted Lord of the Rings statue captures the undead servant of the Dark Lord Sauron, the Ringwraith.",
          price: 74.95,
          image: "lotrwtstat03.jpg",
          thumbnail: "thumbnail_lotrwtstat03.jpg"
        },
        {
          id: 2,
          name: "The Lord of the Rings Arwen Sitting Statue",
          linkId: "the+lord+of+the+rings+arwen+sitting+statue",
          description: "This intricately sculpted Lord of the Rings statue of Arwen beautifully captures her sitting on a chaise, reading a book.",
          price: 84.95,
          image: "lotrwtstat01.jpg",
          thumbnail: "thumbnail_lotrwtstat01.jpg"
        },
        {
          id: 3,
          name: "The Lord of the Rings: Fellowship of the Ring Figure Set 3",
          linkId: "the+lord+of+the+rings+fellowship+of+the+ring+figure+set+3",
          description: "This is the third and final in a series of three sets, which together make up the entire Fellowship of the Ring. This set includes Aragorn, the company's ranger, Samwise Gamgee, ring bearer Frodo's gardener and leader of the Fellowship's tenth member, Bill the pack pony.",
          price: 199.95,
          image: "lotrwtset3.jpg",
          thumbnail: "thumbnail_lotrwtset3.jpg"
        },
        {
          id: 4,
          name: "The Lord of the Rings Fellowship of the Ring - Figure Set 2",
          linkId: "the+lord+of+the+rings+fellowship+of+the+ring+-+figure+set+2",
          description: "This is the second in a series of three Sets, which together make up the entire Fellowship of the Ring. This second set includes Boromir, Gimli, Merry and Pippin.",
          price: 199.95,
          image: "lotrwtset2.jpg",
          thumbnail: "thumbnail_lotrwtset2.jpg"
        },
        {
          id: 5,
          name: "The Lord of the Rings Strider Statue",
          linkId: "the+lord+of+the+rings+strider+statue",
          description: "Watching over Frodo and his party from the shadows is Strider, a grim yet noble Ranger, wanderer and swordsman, and friend to Gandalf the Grey.",
          price: 84.95,
          image: "lotrwtbustsd.jpg",
          thumbnail: "thumbnail_lotrwtbustsd.jpg"
        },
        {
          id: 6,
          name: "The Lord of the Rings Fellowship of the Ring - Figure Set 1",
          linkId: "the+lord+of+the+rings+fellowship+of+the+ring+-+figure+set+1",
          description: "This is the first in a series of three Sets, which together make up the entire Fellowship of the Ring. The first set includes the first 3 characters; Gandalf the Grey, Frodo Baggins and Legolas.",
          price: 199.95,
          image: "lotrwtset1.jpg",
          thumbnail: "thumbnail_lotrwtset1.jpg"
        },
        {
          id: 7,
          name: "The Lord of the Rings Gandalf Statue",
          linkId: "the+lord+of+the+rings+gandalf+statue",
          description: "Bilbo's old friend, an ancient and powerful wizard, Gandalf was a guide to the Fellowship and mentor to Frodo in his quest to destroy the One Ring in the fires of Mount Doom.",
          price: 79.95,
          image: "lotrwtbustgd.jpg",
          thumbnail: "thumbnail_lotrwtbustgd.jpg"
        },
        {
          id: 8,
          name: "The Lord of the Rings Rivendell",
          linkId: "the+lord+of+the+rings+rivendell",
          description: "Home to Elrond, Rivendell was founded in the year 1697 of the Second Age by the Elven Lord as a haven amid the growing darkness in the north of Middle-earth.",
          price: 399.95,
          image: "lotrwtldri.jpg",
          thumbnail: "thumbnail_lotrwtldri.jpg"
        },
        {
          id: 9,
          name: "The Lord of the Rings Orthanc Black Tower of Isengard",
          linkId: "the+lord+of+the+rings+orthanc+black+tower+of+isengard",
          description: "In a great black tower in Isengard dwells Saruman the White.",
          price: 275.95,
          image: "lotrwtldor.jpg",
          thumbnail: "thumbnail_lotrwtldor.jpg"
        },
        {
          id: 10,
          name: "The Lord of the Rings Gollum Statue",
          linkId: "the+lord+of+the+rings+gollum+statue",
          description: "Tortured and wrought wretched by the lure of the One Ring, Gollum is a withered, piteous creature.",
          price: 79.95,
          image: "lotrwtbustgl.jpg",
          thumbnail: "thumbnail_lotrwtbustgl.jpg"
        },
        {
          id: 11,
          name: "The Lord of the Rings Bag End",
          linkId: "the+lord+of+the+rings+bag+end",
          description: "Nestled in the gently rolling green hills of the Shire is the village of Hobbiton, a sleepy assemblage of stone buildings and burrows, home to the diminutive Hobbits.",
          price: 149.95,
          image: "lotrwtldbe.jpg",
          thumbnail: "thumbnail_lotrwtldbe.jpg"
        },
        {
          id: 12,
          name: "MY PRECIOUS™ The Lord of the Rings Gollum and One Ring Statue",
          linkId: "my+precious+the+lord+of+the+rings+gollum+and+one+ring+statue",
          description: "This exquisite Lord of the Rings statue depicts The One Ring to Rule Them All suspended in a sphere, tempting and close, yet unattainable to Gollum.",
          price: 99.95,
          image: "lotrnbmyp.jpg",
          thumbnail: "thumbnail_lotrnbmyp.jpg"
        }

      ];
      items.map( function( item ){
        item.rank = Math.random();
      } );
      return $q.when( items );
    }

    function getItem( itemId ){
      var items = getItems().then( function( data ){
        return data.filter( function( item ){
          return item.linkId == itemId;
        } );
      } );

      return $q.when( items );
    }

  }
})();
