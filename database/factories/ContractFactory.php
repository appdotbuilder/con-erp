<?php

namespace Database\Factories;

use App\Models\Contract;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contract>
 */
class ContractFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['main_contract', 'subcontract', 'supply_contract', 'service_contract'];
        $statuses = ['draft', 'pending', 'active', 'completed', 'terminated'];

        return [
            'contract_number' => strtoupper($this->faker->bothify('CTR-####')),
            'title' => $this->faker->company . ' Contract',
            'type' => $this->faker->randomElement($types),
            'status' => $this->faker->randomElement($statuses),
            'project_id' => Project::factory(),
            'contractor_name' => $this->faker->company,
            'scope_of_work' => $this->faker->paragraph(),
            'contract_value' => $this->faker->randomFloat(2, 10000, 5000000),
            'start_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'payment_terms' => $this->faker->sentence(),
            'special_conditions' => $this->faker->paragraph(),
        ];
    }
}