<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statuses = ['not_started', 'in_progress', 'completed', 'on_hold'];
        $priorities = ['low', 'medium', 'high', 'critical'];

        return [
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'project_id' => Project::factory(),
            'status' => $this->faker->randomElement($statuses),
            'priority' => $this->faker->randomElement($priorities),
            'start_date' => $this->faker->dateTimeBetween('-6 months', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+6 months'),
            'progress_percentage' => $this->faker->numberBetween(0, 100),
            'estimated_cost' => $this->faker->randomFloat(2, 100, 50000),
            'actual_cost' => $this->faker->randomFloat(2, 50, 25000),
            'assigned_to' => $this->faker->name,
            'parent_task_id' => null,
        ];
    }
}