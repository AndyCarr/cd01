const boards = [
      {
        id: 1000,
        title: 'Course Ideas',
        background: '#ffad33',
      },
      {
        id: 2000,
        title: 'House Ideas ',
        background: '#80ccff',
      },
      {
        id: 3000,
        title: 'Garden Ideas',
        background: '#ff3300',
      },
    ]
    
    const lists = [
      {
        id: 100,
        title: 'House ideas',
        board: 1000,
        cards: [
          {
            id: 1,
            text: 'tidy garage',
          },
          {
            id: 2,
            text: 'fix lamp',
          },
        ],
      },
      {
        id: 200,
        title: 'Travel ideas',
        board: 1000,
        cards: [
          {
            id: 11,
            text: 'go to paris',
          },
          {
            id: 22,
            text: 'run a marathon',
          },
        ],
      },
      {
        id: 300,
        title: 'Movie Watch',
        board: 2000,
        cards: [
          {
            id: 11,
            text: 'Top Gub',
          },
          {
            id: 22,
            text: 'gone with Wind',
          },
        ],
      },
    ]
    
    const data = {
      boards,
      lists,
    }
    
    export default data
    
    