package com.flowledger.flowledger_backend.controller;

import com.flowledger.flowledger_backend.dto.ExpenseRequestDto;
import com.flowledger.flowledger_backend.entity.Expense;
import com.flowledger.flowledger_backend.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:5173")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public Expense addExpense(
            @Valid @RequestBody ExpenseRequestDto dto
    ) {
        return expenseService.saveExpense(dto);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @PutMapping("/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @Valid @RequestBody ExpenseRequestDto dto
    ) {

        return expenseService.updateExpense(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {

        expenseService.deleteExpense(id);

        return "Expense deleted successfully";
    }
}