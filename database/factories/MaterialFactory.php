<?php

namespace Database\Factories;

use App\Models\Material;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Material>
 */
class MaterialFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Concrete', 'Steel', 'Wood', 'Electrical', 'Plumbing', 'Paint', 'Tools', 'Safety'];
        $units = ['pieces', 'tons', 'gallons', 'feet', 'bags', 'sets'];

        return [
            'name' => $this->faker->word . ' ' . $this->faker->word,
            'code' => strtoupper($this->faker->bothify('MAT-###')),
            'description' => $this->faker->sentence(),
            'category' => $this->faker->randomElement($categories),
            'unit_of_measure' => $this->faker->randomElement($units),
            'unit_cost' => $this->faker->randomFloat(2, 1, 1000),
            'current_stock' => $this->faker->numberBetween(0, 1000),
            'minimum_stock' => $this->faker->numberBetween(10, 500),
            'supplier' => $this->faker->company,
        ];
    }
}