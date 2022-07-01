describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('ordena un array', function(){
        expect(bubbleSort([4,5,1,0])).toEqual([0,1,4,5])
    });
    it('ordena un array ordenado', function(){
        expect(bubbleSort([9,8,7,6])).toEqual([6,7,8,9])
    })
    it('llama a swap', function(){
        spyOn(window, "swap").and.callThrough();
        bubbleSort([1, 2, 3, 5, 4]);
        expect(window.swap.calls.count()).toEqual(1);
      });    
  });
