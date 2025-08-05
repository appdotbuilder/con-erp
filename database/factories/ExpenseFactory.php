<?php

namespace Database\Factories;

use App\Models\Expense;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Expense>
 */
class ExpenseFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Materials', 'Labor', 'Equipment', 'Permits', 'Utilities', 'Professional Services', 'Safety'];
        $statuses = ['pending', 'approved', 'paid'];

        return [
            'project_id' => Project::factory(),
            'category' => $this->faker->randomElement($categories),
            'description' => $this->faker->sentence(),
            'amount' => $this->faker->randomFloat(2, 100, 100000),
            'expense_date' => $this->faker->dateTimeBetween('-6 months', 'now'),
            'vendor' => $this->faker->company,
            'receipt_number' => strtoupper($this->faker->bothify('RCP-####')),
            'status' => $this->faker->randomElement($statuses),
        ];
    }
}