describe('Merge Sort', function(){
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });
    it('ordena un array de un elemento', function(){
        expect( mergeSort([8])).toEqual([8])
    });
    it('ordena un array ordenado', function(){
        expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4])
    })
    it('ordena un array desordenado', function(){
        expect(bubbleSort([4,6,35,9])).toEqual([4,6,9,35]);
        expect(bubbleSort([34,65,1,0,98,102,45])).toEqual([0,1,34,45,65,98,102])
      });    
  });