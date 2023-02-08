test('should take old man older then 90', () => {
    const ages = [18, 29, 22, 100, 88, 14];

    const oldAges = ages.filter(el => el> 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

