<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Expense
 *
 * @property int $id
 * @property int $project_id
 * @property string $category
 * @property string $description
 * @property string $amount
 * @property \Illuminate\Support\Carbon $expense_date
 * @property string|null $vendor
 * @property string|null $receipt_number
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Project $project
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Expense newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Expense newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Expense query()
 * @method static \Illuminate\Database\Eloquent\Builder|Expense whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Expense whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Expense whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Expense whereStatus($value)
 * @method static \Database\Factories\ExpenseFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Expense extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'project_id',
        'category',
        'description',
        'amount',
        'expense_date',
        'vendor',
        'receipt_number',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'decimal:2',
        'expense_date' => 'date',
    ];

    /**
     * Get the project that owns the expense.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}