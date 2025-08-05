<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company . ' Construction Project',
            'code' => strtoupper($this->faker->bothify('PRJ-####')),
            'description' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['planning', 'active', 'on_hold', 'completed', 'cancelled']),
            'priority' => $this->faker->randomElement(['low', 'medium', 'high', 'critical']),
            'start_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'budget' => $this->faker->randomFloat(2, 100000, 50000000),
            'actual_cost' => $this->faker->randomFloat(2, 50000, 25000000),
            'progress_percentage' => $this->faker->numberBetween(0, 100),
            'location' => $this->faker->city,
            'client_name' => $this->faker->company,
            'project_manager' => $this->faker->name,
            'user_id' => User::factory(),
        ];
    }
}